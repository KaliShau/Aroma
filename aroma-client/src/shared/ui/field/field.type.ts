import { ComponentType, InputHTMLAttributes, ReactNode } from 'react'
import { FieldError } from 'react-hook-form'

export type TypeField = InputHTMLAttributes<HTMLInputElement> & {
  label?: string
  placeholder?: string
  icon?: ComponentType<any>
  error?: FieldError
}
