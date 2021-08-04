import { api } from '../../services/api.js';
import config from '../../utils/globalValues.js';
import ruler from '../../utils/rulerValues.js';
import anomChi from '../../assets/images/legendas/anomalias/legenda_anom_chi.svg';
import anomUmid from '../../assets/images/legendas/anomalias/legenda_anom_divergência_de_umidade.svg';
import anomGeop from '../../assets/images/legendas/anomalias/legenda_anom_geopotencial.svg';
import anomPrec from '../../assets/images/legendas/anomalias/legenda_anom_precipitação.svg';
import anomPnmm from '../../assets/images/legendas/anomalias/legenda_anom_pressão_nível_médio_do_mar.svg';
import anomPsi from '../../assets/images/legendas/anomalias/legenda_anom_psi.svg';
import anomRad from '../../assets/images/legendas/anomalias/legenda_anom_radiação_onda_longa.svg';
import anomTemp from '../../assets/images/legendas/anomalias/legenda_anom_temperatura_do_ar.svg';
import anomTsm from '../../assets/images/legendas/anomalias/legenda_anom_tsm.svg';
import anomVento from '../../assets/images/legendas/anomalias/legenda_anom_vento.svg';

export const images = {
  name: 'images',
  state: {
    token: null,
    subtitle: '',
    images: [],
    selectedGlobalMap: [],
    selectedBrasilMap: [],
  },
  reducers: {
    setToken(state, payload) {
      console.log(`token chegando no reducer: ${payload}`);
      return {
        ...state,
        token: payload ?? '8978d76440e44ebbbed7c2c04784cedf',
      };
    },
    setImages(state, payload) {
      return {
        ...state,
        images: payload,
      };
    },
    selectedMap(state, payload) {
      const { globalMap, brasilMap } = payload;

      return {
        ...state,
        selectedGlobalMap: globalMap,
        selectedBrasilMap: brasilMap,
      };
    },
    selectedSubtitle(state, payload) {
      const { subtitle } = payload;
      return {
        ...state,
        subtitle,
      };
    },
  },
  effects: (dispatch) => ({
    async getTokenAsync() {
      const storedToken = localStorage.getItem('tokClimaSessionId');
      const sessionToken = storedToken && JSON.parse(storedToken);

      this.setToken(sessionToken);
    },
    async getImagesAsync(payload, rootState) {
      const {
        analysis, statistic, variable, period, indexType, phase,
      } =
        payload;

      console.log(
        `chagou no getImages effect ${{
          analysis,
          statistic,
          variable,
          period,
          indexType,
          phase,
          contorno: 0,
          token: rootState.images.token ?? '8978d76440e44ebbbed7c2c04784cedf',
        }}`,
      );

      const analysisValue = config.analysis[analysis];
      const variableValue = await config.variables[analysisValue][variable];
      const indexValue = config.indexType[indexType];

      let statisticValue;

      if (analysis === 0 && indexType === 0) {
        statisticValue = config.phases.fases[phase];
      }
      if (analysis === 0 && [1, 2, 3, 4].includes(indexType)) {
        statisticValue = config.phases.temp[phase];
      }
      if (analysis === 1) {
        statisticValue = config.statistics[statistic];
      }

      console.log({
        session_id:
          rootState.images.token ?? '8978d76440e44ebbbed7c2c04784cedf',
        analysis: analysisValue,
        statistic: statisticValue,
        variable: variableValue,
        indexType: indexValue,
        period,
      });

      const res = await api.post('/tokclima/imagelinks', {
        session_id:
          rootState.images.token ?? '8978d76440e44ebbbed7c2c04784cedf',
        analise: analysisValue,
        estatistica: statisticValue,
        variavel: variableValue,
        indice: indexValue,
        periodo: period,
      });
      this.setImages(res.data);
    },

    async selectMapAsync(payload, rootState) {
      const {
        month, trimester, year,
      } = payload;

      function selectedTrimester() {
        if (trimester !== null) {
          const trimesterImage = rootState.images.images.filter((item) => item.includes(ruler.trimesters[trimester]));
          if (year) {
            return trimesterImage.filter((item) => item.includes(year));
          }
          return trimesterImage;
        }
      }
      function selectedMonth() {
        if (month !== null) {
          const correctMonth = month + 1;
          const monthImage = rootState.images.images.filter((item) => item.includes(`0${correctMonth}_layer`.slice(-8)));
          if (year) {
            return monthImage.filter((item) => item.includes(year));
          }
          return monthImage;
        }
      }

      if (month !== null && trimester === null) {
        const globalMap = selectedMonth().filter((item) => item.includes('global'));
        const brasilMap = selectedMonth().filter((item) => item.includes('brasil'));
        this.selectedMap({ globalMap, brasilMap });
      }
      if (month === null && trimester !== null) {
        const globalMap = selectedTrimester().filter((item) => item.includes('global'));
        const brasilMap = selectedTrimester().filter((item) => item.includes('brasil'));
        this.selectedMap({ globalMap, brasilMap });
      }
    },
    async setSubtitle(payload, rootState) {
      const {
        analysis, statistic, variable,
      } = payload;

      if (analysis === 1 && statistic === 0) {
        const subtitle = {
          0: anomPrec,
          1: anomTsm,
          2: anomTemp,
          3: anomPnmm,
          4: anomGeop,
          5: anomUmid,
          6: anomPsi,
          7: anomVento,
          8: anomVento,
          9: anomChi,
        };
        this.selectedSubtitle({ subtitle: subtitle[variable] });
      } else {
        this.selectedSubtitle({ subtitle: null });
      }
    },
  }),
};
