import { socialItems } from '@/navigation/social'
import React from 'react'

export const SocialItem = () => {

    return (
        <div className="hidden sm:flex items-center space-x-4">
            {socialItems.map(({ icon: Icon, url, size, color }) => (
                <Icon
                    key={url}
                    onClick={() => window.open(url, '_blank')}
                    size={size}
                    color={color}
                    className="cursor-pointer"
                />
            ))}
        </div>
    )
}
