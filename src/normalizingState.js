import _ from 'lodash';

export default data => ({
  byId: _.keyBy(data, 'id'),
  allIds: data.map(element => element.id),
});
