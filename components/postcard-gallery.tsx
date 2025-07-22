"use client"

import { useState } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function PostcardGallery() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState("")
  const [selectedTitle, setSelectedTitle] = useState("")

  const openImage = (src: string, title: string) => {
    setSelectedImage(src)
    setSelectedTitle(title)
    setIsOpen(true)
  }

  const postcards = [
    {
      category: "9x12",
      items: [
        {
          src: "/placeholder.svg?height=600&width=800",
          title: "Restaurant Promotion",
          description: "9x12-Inch postcard for local restaurant featuring weekly specials",
        },
        {
          src: "/placeholder.svg?height=600&width=800",
          title: "Home Services",
          description: "9x12-Inch postcard for plumbing company with seasonal discount",
        },
        {
          src: "/placeholder.svg?height=600&width=800",
          title: "Retail Store",
          description: "9x12-Inch postcard for local boutique featuring new arrivals",
        },
      ],
    },
    {
      category: "6x11",
      items: [
        {
          src: "/placeholder.svg?height=600&width=800",
          title: "Dental Office",
          description: "6x11-Inch postcard for dental practice offering new patient special",
        },
        {
          src: "/placeholder.svg?height=600&width=800",
          title: "Auto Repair",
          description: "6x11-Inch postcard for auto shop with seasonal maintenance offer",
        },
      ],
    },
    {
      category: "15x12",
      items: [
        {
          src: "/placeholder.svg?height=600&width=800",
          title: "Real Estate",
          description: "15x12-Inch tabloid for real estate agent featuring multiple listings",
        },
        {
          src: "/placeholder.svg?height=600&width=800",
          title: "Furniture Store",
          description: "15x12-Inch tabloid for furniture store showcasing seasonal collection",
        },
      ],
    },
  ]

  return (
    <>
      <Tabs defaultValue="9x12" className="w-full">
        <TabsList className="grid grid-cols-3 max-w-md mx-auto mb-8">
          <TabsTrigger value="9x12">9x12-Inch</TabsTrigger>
          <TabsTrigger value="6x11">6x11-Inch</TabsTrigger>
          <TabsTrigger value="15x12">15x12-Inch</TabsTrigger>
        </TabsList>

        {postcards.map((category) => (
          <TabsContent key={category.category} value={category.category} className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.items.map((item, i) => (
                <div
                  key={i}
                  className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer"
                  onClick={() => openImage(item.src, item.title)}
                >
                  <div className="aspect-[4/3] relative">
                    <img src={item.src || "/placeholder.svg"} alt={item.title} className="object-cover w-full h-full" />
                  </div>
                  <div className="p-4 bg-white">
                    <h3 className="font-bold mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-4xl">
          <div className="p-2">
            <h2 className="text-xl font-bold mb-4">{selectedTitle}</h2>
            <div className="rounded-lg overflow-hidden">
              <img src={selectedImage || "/placeholder.svg"} alt={selectedTitle} className="w-full h-auto" />
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
