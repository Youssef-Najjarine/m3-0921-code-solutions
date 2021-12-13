function graduate(credential) {
  return function (fullName) {
    return fullName + ', ' + credential;
  };
}
const medicalSchool = graduate('M.D.');
const lawSchool = graduate('Esq.');

console.log('medicalSchool: ', medicalSchool('Youssef Najjarine'));
console.log('lawSchool: ', lawSchool('Youssef Najjarine'));
