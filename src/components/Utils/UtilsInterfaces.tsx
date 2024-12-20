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
