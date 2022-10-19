import {renderBlock} from './lib.js'

export function renderUserBlock(userName: string, avatarLink: string, favoriteItemsAmount?: number) {
  console.log('favoriteItemsAmount ', favoriteItemsAmount)
  renderBlock(
    'user-block',
    `
    <div class="header-container">
      <img class="avatar" src=${avatarLink} alt="Wade Warren" />
      <div class="info">
          <p class="name">${userName}</p>
          <p class="fav">
            <i class="heart-icon${(!favoriteItemsAmount ? '' : ' active')}"></i>${favoriteItemsAmount || 'ничего нет'}
          </p>
      </div>
    </div>
    `
  )
}
