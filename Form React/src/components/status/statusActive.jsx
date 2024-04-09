export const Active = () =>{
  document.querySelector('.content-status-desactive').classList.add('content-status-active')
  document.querySelector('.content-status-desactive').classList.remove('content-status-desactive')
  document.querySelector('.number-desactive').classList.add('number-active')
  document.querySelector('.number-desactive').classList.remove('number-desactive')
  document.querySelector('.data-desactive').classList.add('data-active')
  document.querySelector('.data-desactive').classList.remove('data-desactive')
  document.querySelector('.describe-desactive').classList.add('describe-active')
  document.querySelector('.describe-desactive').classList.remove('describe-desactive')
}
export const Desactive = () =>{
  document.querySelector('.content-status-active').classList.add('content-status-desactive')
  document.querySelector('.content-status-active').classList.remove('ccontent-status-active')
  document.querySelector('.number-active').classList.add('number-desactive')
  document.querySelector('.number-active').classList.remove('number-active')
  document.querySelector('.data-active').classList.add('data-desactive')
  document.querySelector('.data-active').classList.remove('data-active')
  document.querySelector('.describe-active').classList.add('describe-desactive')
  document.querySelector('.describe-active').classList.remove('describe-active')
}