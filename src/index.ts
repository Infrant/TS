import {renderSearchFormBlock} from './search-form.js'
import {renderSearchStubBlock} from './search-results.js'
import {renderUserBlock} from './user.js'
import {renderToast} from './lib.js'
import {favoritesAmountKey, userKey} from './constants.js';
import {getFavoritesAmount, getUserData, onFormSubmit} from './handlers.js';

window.addEventListener('DOMContentLoaded', () => {
  const {userName, avatarUrl} = getUserData()
  const {favoritesAmount} = getFavoritesAmount()
  renderUserBlock(userName, avatarUrl, favoritesAmount)
  renderSearchFormBlock()
  renderSearchStubBlock()
  renderToast(
    {text: 'Это пример уведомления. Используйте его при необходимости', type: 'success'},
    {
      name: 'Понял', handler: () => {
        console.log('Уведомление закрыто')
      }
    }
  )
  const form = document.querySelector('form')
  form.onsubmit = onFormSubmit
})

localStorage.setItem(userKey, JSON.stringify({userName: 'Wade Warren', avatarUrl: '/img/avatar.png'}));
localStorage.setItem(favoritesAmountKey, JSON.stringify({favoritesAmount: 7}));
