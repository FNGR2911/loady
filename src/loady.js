const loady = ({ triggerElement, event = 'click', storageItem, script, attributes }) => {
  if (triggerElement instanceof HTMLElement === false) {
    throw new Error('triggerElement is not a DOM Element.')
  }

  if (typeof localStorage === undefined) {
    throw new Error('localStorage is not available in this browser.')
  }

  if (attributes !== null && typeof attributes !== 'object') {
    throw new Error('attributes is not an valid object.')
  }

  let consent = localStorage.getItem(storageItem)

  const isAlreadyAppended = () => {
    const scripts = Array.from(document.getElementsByTagName('script'))
    return scripts.some((s) => s.src === script)
  }

  const createScriptElement = () => {
    const el = document.createElement('script')
    el.src = script
    for (let [key, value] of Object.entries(attributes)) {
      el.setAttribute(key, value)
    }
    return el
  }

  const appendScriptElement = (el) => {
    isAlreadyAppended() ? null : document.getElementsByTagName('head')[0].appendChild(el)
  }

  const run = () => {
    localStorage.setItem(storageItem, true)
    consent = localStorage.getItem(storageItem)
    const scriptElement = createScriptElement()
    appendScriptElement(scriptElement)
  }

  triggerElement.addEventListener(event, () => run())
  if (consent === 'true') run()
}

export default loady
