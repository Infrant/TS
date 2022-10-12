import {favoritesAmountKey, userKey} from './constants.js';
import {IFavoritesAmountKey, ISearchFormData, IUserData} from "./interfaces.js";

export const getUserData = (): IUserData => {
  const userData: unknown = JSON.parse(localStorage.getItem(userKey))

  const hasUserName = (userData as IUserData).userName !== undefined
    && typeof (userData as IUserData).userName === 'string';
  const hasAvatarUrl = (userData as IUserData).avatarUrl !== undefined
    && typeof (userData as IUserData).avatarUrl === 'string';

  if (!hasUserName && !hasAvatarUrl) return {userName: 'unknown', avatarUrl: 'no avatar'}

  return userData as IUserData
}

export const getFavoritesAmount = (): IFavoritesAmountKey => {
  const favoritesAmount: unknown = JSON.parse(localStorage.getItem(favoritesAmountKey))

  const hasFavoritesAmountKey = (favoritesAmount as IFavoritesAmountKey).favoritesAmount !== undefined
    && typeof (favoritesAmount as IFavoritesAmountKey).favoritesAmount === 'number';

  if (!hasFavoritesAmountKey) return {favoritesAmount: 0}

  return favoritesAmount as IFavoritesAmountKey
}

export const onFormSubmit = (e: SubmitEvent) => {
  e.preventDefault()
  const inputElements = document.querySelectorAll('input')
  const filteredInputElements = Array.from(inputElements).filter(input => input.type !== 'hidden')

  const formData = {
    city: '',
    checkin: '',
    checkout: '',
    price: ''
  }
  filteredInputElements.forEach(({name, value}) => {
    formData[name] = value
  })

  search(formData)
}

export const search = (formData: ISearchFormData) => {
  console.log(formData)
}
