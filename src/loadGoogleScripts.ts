//@ts-ignore
import * as script from 'loadjs'

export const loadRemoteScript = async () => {
  return new Promise((resolve, reject) =>
    script('https://www.gstatic.com/charts/loader.js', {
      success: resolve,
      error: reject
    })
  )
}
export const loadGoogleScripts = async ({
  window = {}
}: {
  window: {
    google?: any
  }
}) => {
  try {
    if ('google' in window) return
    await loadRemoteScript()
  } catch (err) {
    console.error(
      `Could not load chart loader scripts from Google : ${err.message}`,
      err
    )
  }
}
