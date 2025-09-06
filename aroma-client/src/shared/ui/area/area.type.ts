import { ComponentType, TextareaHTMLAttributes } from 'react'
import { FieldError } from 'react-hook-form'

export type TypeArea = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label?: string
  placeholder?: string
  icon?: ComponentType<any>
  error?: FieldError
}
