import { consola } from 'consola'

export default defineEventHandler(async (event) => {
  let riskData = null
  console.debug('fetching risk data ...')
  await fetch('https://snd-portal-dev.azurewebsites.net/api/referenceData/RiskRatings').then(res => res.json()).then((d) => {
    riskData = d
    console.log('risk data fetched ...', riskData)
  })
  console.log('risk data fetched end', riskData)
  return { data: riskData }
})
