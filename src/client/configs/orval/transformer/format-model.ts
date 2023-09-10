import { objectToCamel } from 'ts-case-convert'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const formatModel = (content: any) => {
  if (content.components?.schemas) {
    const keys = Object.keys(content.components?.schemas)
    for (const key of keys) {
      if (content.components.schemas[key]?.properties) {
        const { properties } = content.components.schemas[key]
        const propertiesCamel = objectToCamel(properties)
        content.components.schemas[key].properties = propertiesCamel
      }

      if (content.components?.schemas[key]?.required) {
        const { required } = content.components.schemas[key]
        const keysCamel = objectToCamel(
          Object.fromEntries(required.map((reqKey: string) => [reqKey, null]))
        )
        content.components.schemas[key].required = Object.keys(keysCamel)
      }
    }
  }
  return content
}
