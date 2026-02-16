export interface Transmission {
  yearMake: string
  market: string
  type: string
  trannyCode: string
  gear1: number
  gear2: number
  gear3: number
  gear4: number
  gear5: number
  gear6: number | null
  reverse: number
  finalDrive: number
  notes: string
}

export const useBSeriesTransmissions = (): Transmission[] => [
  { yearMake: '90-91 Integra XSi', market: 'JDM', type: 'Cable', trannyCode: 'S1/J1', gear1: 3.230, gear2: 2.105, gear3: 1.458, gear4: 1.107, gear5: 0.848, gear6: null, reverse: 3.000, finalDrive: 4.400, notes: 'No LSD' },
  { yearMake: 'CRX/Civic SiR (EF8/9)', market: 'JDM', type: 'Cable', trannyCode: 'Y1', gear1: 3.166, gear2: 2.052, gear3: 1.416, gear4: 1.103, gear5: 0.873, gear6: null, reverse: 4.000, finalDrive: 2.660, notes: 'Opt LSD' },
  { yearMake: '90-93 Integra RS/LS/GS', market: 'USDM', type: 'Cable', trannyCode: 'S1/YS1', gear1: 3.166, gear2: 1.857, gear3: 1.259, gear4: 0.935, gear5: 0.742, gear6: null, reverse: 3.000, finalDrive: 4.400, notes: 'No LSD' },
  { yearMake: '92-93 Integra GSR/XSi', market: 'USDM/JDM', type: 'Cable', trannyCode: 'YS1', gear1: 3.230, gear2: 2.105, gear3: 1.458, gear4: 1.107, gear5: 0.848, gear6: null, reverse: 3.000, finalDrive: 4.400, notes: 'JDM Opt LSD' },
  { yearMake: '94-2001 Integra LS/RS/GS/SE', market: 'USDM', type: 'Hydro', trannyCode: 'S80', gear1: 3.230, gear2: 1.900, gear3: 1.269, gear4: 0.966, gear5: 0.714, gear6: null, reverse: 3.000, finalDrive: 4.266, notes: 'No LSD' },
  { yearMake: '94-2001 Integra GSR/SiR-G', market: 'USDM/JDM', type: 'Hydro', trannyCode: 'S80/Y80', gear1: 3.230, gear2: 1.900, gear3: 1.360, gear4: 1.034, gear5: 0.787, gear6: null, reverse: 3.000, finalDrive: 4.400, notes: 'JDM Opt LSD' },
  { yearMake: '96-97 Integra Type R / Civic Type R (EK9) / Civic SiR (EK4 & EG6)', market: 'USDM/JDM', type: 'Hydro', trannyCode: 'Y21/Y80/S80/S4C', gear1: 3.230, gear2: 2.105, gear3: 1.458, gear4: 1.107, gear5: 0.848, gear6: null, reverse: 3.000, finalDrive: 4.400, notes: 'LSD on R, Opt on SiR' },
  { yearMake: '1998-2001 Integra Type R', market: 'JDM', type: 'Hydro', trannyCode: 'S80', gear1: 3.230, gear2: 2.105, gear3: 1.458, gear4: 1.034, gear5: 0.787, gear6: null, reverse: 3.000, finalDrive: 4.785, notes: 'LSD' },
  { yearMake: '95-97 Del Sol VTEC / 99-01 Civic Si', market: 'USDM', type: 'Hydro', trannyCode: 'Y21/S21', gear1: 3.230, gear2: 2.105, gear3: 1.458, gear4: 1.107, gear5: 0.848, gear6: null, reverse: 3.000, finalDrive: 4.400, notes: 'No LSD' },
]

export const useKSeriesTransmissions = (): Transmission[] => [
  { yearMake: '02-06 RSX Type-S / Integra Type R (DC5)', market: 'USDM/JDM', type: 'Hydro', trannyCode: 'Y2M3', gear1: 3.266, gear2: 2.130, gear3: 1.517, gear4: 1.147, gear5: 0.921, gear6: 0.738, reverse: 3.583, finalDrive: 4.764, notes: 'LSD' },
  { yearMake: '02-06 RSX Base / Integra iS (DC5)', market: 'USDM/JDM', type: 'Hydro', trannyCode: 'KAJE', gear1: 3.266, gear2: 1.880, gear3: 1.300, gear4: 0.938, gear5: 0.714, gear6: null, reverse: 3.583, finalDrive: 4.388, notes: 'No LSD' },
  { yearMake: '02-05 Civic Si (EP3)', market: 'USDM', type: 'Hydro', trannyCode: 'KBPP', gear1: 3.266, gear2: 2.130, gear3: 1.517, gear4: 1.147, gear5: 0.921, gear6: null, reverse: 3.583, finalDrive: 4.764, notes: 'No LSD' },
  { yearMake: '04-08 Accord (CL7/CL9)', market: 'JDM', type: 'Hydro', trannyCode: 'ASP3', gear1: 3.266, gear2: 2.130, gear3: 1.517, gear4: 1.147, gear5: 0.921, gear6: 0.738, reverse: 3.583, finalDrive: 4.764, notes: 'LSD on Euro R' },
  { yearMake: '06-11 Civic Si (FA5/FG2)', market: 'USDM', type: 'Hydro', trannyCode: 'K20Z3', gear1: 3.266, gear2: 2.130, gear3: 1.517, gear4: 1.147, gear5: 0.921, gear6: 0.738, reverse: 3.583, finalDrive: 4.764, notes: 'No LSD' },
  { yearMake: '07-11 Civic Type R (FD2)', market: 'JDM', type: 'Hydro', trannyCode: 'K20A', gear1: 3.266, gear2: 2.130, gear3: 1.517, gear4: 1.147, gear5: 0.921, gear6: 0.738, reverse: 3.583, finalDrive: 4.764, notes: 'LSD' },
]
