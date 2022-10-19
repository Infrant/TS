import {renderBlock} from './lib.js'

export function renderSearchFormBlock(dateIn?: string, dateOut?: string) {
  const tzOffset = (new Date()).getTimezoneOffset() * 60000

  const inOutD = (new Date(Date.now() - tzOffset));
  const defaultDateIn = new Date(inOutD.setDate(inOutD.getDate() + 1))
    .toISOString()
    .slice(0, 10)
  const defaultDateOut = new Date(inOutD.setDate(inOutD.getDate() + 1))
    .toISOString()
    .slice(0, 10)

  const minMaxD = (new Date(Date.now() - tzOffset));
  const minDate = minMaxD
    .toISOString()
    .slice(0, 10)
  const stampNextMonth = minMaxD.setMonth(minMaxD.getMonth() + 2)
  const stampLastDate = new Date(stampNextMonth).setDate(0)
  const maxDate = new Date(stampLastDate)
    .toISOString()
    .slice(0, 10)

  renderBlock(
    'search-form-block',
    `
    <form>
      <fieldset class="search-filedset">
        <div class="row">
          <div>
            <label for="city">Город</label>
            <input id="city" type="text" disabled value="Санкт-Петербург" name="city"/>
            <input type="hidden" disabled value="59.9386,30.3141" />
          </div>
          <!--<div class="providers">
            <label><input type="checkbox" name="provider" value="homy" checked /> Homy</label>
            <label><input type="checkbox" name="provider" value="flat-rent" checked /> FlatRent</label>
          </div>--!>
        </div>
        <div class="row">
          <div>
            <label for="check-in-date">Дата заезда</label>
            <input id="check-in-date" type="date" value=${dateIn || defaultDateIn} min=${minDate} max=${maxDate} name="checkin" />
          </div>
          <div>
            <label for="check-out-date">Дата выезда</label>
            <input id="check-out-date" type="date" value=${dateOut || defaultDateOut} min=${minDate} max=${maxDate} name="checkout" />
          </div>
          <div>
            <label for="max-price">Макс. цена суток</label>
            <input id="max-price" type="text" value="" name="price" class="max-price" />
          </div>
          <div>
            <div><button>Найти</button></div>
          </div>
        </div>
      </fieldset>
    </form>
    `
  )
}
