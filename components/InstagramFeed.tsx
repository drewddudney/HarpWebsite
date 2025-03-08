import Image from "next/image"

const placeholderPosts = [
  { id: 1, imageUrl: "/placeholder.svg?height=300&width=300", caption: "Rehearsing for an upcoming wedding ceremony" },
  { id: 2, imageUrl: "/placeholder.svg?height=300&width=300", caption: "New harp strings day!" },
  { id: 3, imageUrl: "/placeholder.svg?height=300&width=300", caption: "Beautiful venue for today's performance" },
]

export function InstagramFeed() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
      {placeholderPosts.map((post) => (
        <div key={post.id} className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-md">
          <div className="relative h-64 w-full">
            <Image src={post.imageUrl || "/placeholder.svg"} alt={post.caption} fill className="object-cover" />
          </div>
          <div className="p-4">
            <p className="text-sm text-gray-600 dark:text-gray-300">{post.caption}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

