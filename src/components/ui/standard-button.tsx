import Link from 'next/link'
import { Button } from './button'
import { ArrowRight, Phone, Send, MessageSquare } from 'lucide-react'
import { ReactNode } from 'react'

interface StandardButtonProps {
  variant?:
    | 'primary'
    | 'secondary'
    | 'white'
    | 'purple'
    | 'outline-white'
    | 'outline-blue'
  size?: 'sm' | 'lg'
  href?: string
  onClick?: () => void
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  icon?: 'arrow' | 'phone' | 'send' | 'message' | 'none'
  children: ReactNode
  className?: string
  fullWidth?: boolean
}

export function StandardButton({
  variant = 'primary',
  size = 'lg',
  href,
  onClick,
  disabled,
  type = 'button',
  icon = 'arrow',
  children,
  className = '',
  fullWidth = false,
}: StandardButtonProps) {
  const getVariantClasses = () => {
    switch (variant) {
      case 'primary':
        return 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white'
      case 'secondary':
        return 'bg-white text-blue-600 hover:bg-gray-100'
      case 'white':
        return 'bg-white text-black hover:bg-gray-100'
      case 'purple':
        return 'bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white'
      case 'outline-white':
        return 'border-white text-white hover:bg-white hover:text-blue-600 border'
      case 'outline-blue':
        return 'border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white border'
      default:
        return 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white'
    }
  }

  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'px-6 py-3 text-sm'
      case 'lg':
        return 'px-14 py-6 text-lg'
      default:
        return 'px-20 py-6 text-lg'
    }
  }

  const getIcon = () => {
    switch (icon) {
      case 'arrow':
        return <ArrowRight className="w-5 h-5 ml-2" />
      case 'phone':
        return <Phone className="w-5 h-5 mr-2" />
      case 'send':
        return <Send className="w-5 h-5 mr-2" />
      case 'message':
        return <MessageSquare className="w-5 h-5 mr-2" />
      case 'none':
        return null
      default:
        return <ArrowRight className="w-5 h-5 ml-2" />
    }
  }

  const buttonClasses = `
    ${getVariantClasses()}
    ${getSizeClasses()}
    ${fullWidth ? 'w-full' : ''}
    font-semibold cursor-pointer shadow-lg min-w-[220px] min-h-[60px] hover:shadow-xl transition-all duration-300 hover:scale-105
    ${className}
  `.trim()

  const buttonContent = (
    <Button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={buttonClasses}
    >
      {icon === 'phone' || icon === 'send' || icon === 'message'
        ? getIcon()
        : null}
      {children}
      {icon === 'arrow' || icon === 'none' ? getIcon() : null}
    </Button>
  )

  if (href && !disabled) {
    return <Link href={href}>{buttonContent}</Link>
  }

  return buttonContent
}
