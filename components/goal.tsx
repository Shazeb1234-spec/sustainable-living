import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import Image from 'next/image'

export interface GoalProps{
    imageUrl: string
    imageAlt: string
    title: string
    description: string
}
const Goal = (value:GoalProps) => {
  return (
    <Card>
        <CardHeader>
          <CardTitle>{value.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <Image className="mb-8 border-8 border-b-emerald-400 border-t-emerald-400
          border-r-emerald-600
           border-l-emerald-600" src={value.imageUrl} alt={value.imageAlt} width={300} height={500} />
          <CardDescription>
            {value.description}
          </CardDescription>
        </CardContent>
      </Card>
  )
}

export default Goal