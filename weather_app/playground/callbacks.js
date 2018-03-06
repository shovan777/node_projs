var getUser = (id, callback) => {
  var user = {
    id: id,
    name: 'Ram'
  };
  callback(user);
};
getUser(32, (user) => {
  console.log(user);
});
