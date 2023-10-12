let introduction = function (string) {
  return `Hi, my name is ${string}.`;
}

let introductionWithLanguage = function (name, language) {
  return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}

let introductionWithLanguageOptional = function (name, language = 'JavaScript') {
  return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}