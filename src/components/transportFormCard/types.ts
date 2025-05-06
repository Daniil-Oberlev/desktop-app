// interface IntermediateStop {
//   id: string
//   location: string
// }

// type ITransportForm = {
//   id: string
//   name: string
//   point_from: string
//   point_to: number
//   distance: number
//   stops: IntermediateStop[]
//   createdAt?: string // TODO: для создания черновиков
// }

// interface ITransportFormCard {
//   formData: ITransportForm
//   index: number
//   canRemove: boolean
//   onUpdateField: (formId: string, field: string, value: any) => void
//   onConfirmDeleteForm: (id: string) => void
//   onAddIntermediateStop: (formId: string) => void
//   onUpdateIntermediateStop: (formId: string, stopId: string, value: string) => void
//   onConfirmDeleteIntermediateStop: (formId: string, stopId: string) => void
//   onSaveAsDraft?: (form: ITransportForm) => void
//   isDraft: boolean
// }
