export const fetchUserData = async (firebase, user) => {
  const userData = await firebase.getUserData(user.uid);

  console.log("userData", userData);

  // const roles = userData.roles
  //   ? await Promise.all(
  //       userData.roles.map(async role => {
  //         const fetchedRole = await firebase.getRoleByReference(role.path);
  //         return { id: parseInt(role.id), ...fetchedRole };
  //       })
  //     )
  //   : {};

  const userObject = {
    uid: user.uid,
    name: userData.name,
    surname: userData.surname,
    email: user.email,
    slug: userData.slug,
    // roles
  };

  return userObject;
};
