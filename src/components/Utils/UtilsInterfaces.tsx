import React, { ReactNode } from 'react'

export interface NavButtonProps {
  to: string
  label: string
  className?: string
  onClick?: () => void
}

export interface ButtonProps {
  label: string
  onClick?: () => void
  className?: string
}

export interface DrawerMenuProps {
  children: ReactNode
  onShow: boolean
  onClose: () => void
}

export interface InputProps {
  type: string
  className?: string
  value: any
  placeholder: string
  handleChange: (e: any) => void
  handleConfirm: (e: any) => void
}
