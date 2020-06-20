import mushroomData from '../../helpers/data/mushroomData';

const buildForest = () => {
  mushroomData.getMushrooms()
    .then((response) => console.warn('Get mushrooms worked!!', response.data))
    .catch((err) => console.error('get mushrooms broke', err));
};

export default { buildForest };
