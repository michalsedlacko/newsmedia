import { useFetch } from '@vueuse/core'

class Service {
  readonly apiUrl = 'https://run.mocky.io/v3/941b4ff3-a636-4b2c-912a-3b775d9c8b04'

  public async getWords(): Promise<Array<string> | boolean> {
    const { onFetchResponse, onFetchError, statusCode } = useFetch(this.apiUrl, {
      method: 'get',
      headers: {
        Accept: 'application/json'
      }
    })

    return new Promise((resolve) => {
      onFetchError(async () => {
        resolve(false)
      })

      onFetchResponse(async (response) => {
        const data = await new Response(response.body).json()

        resolve(data.data)
        return
      })
    })
  }
}

export const service = new Service()
