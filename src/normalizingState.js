export default data => data.reduce(({ byId, allIds }, element) => ({
  byId: {
    ...byId,
    [element.id]: element,
  },
  allIds: [
    ...allIds,
    element.id,
  ],
}),
{
  byId: {},
  allIds: [],
});
