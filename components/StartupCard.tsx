import { formarDate } from "@/lib/utils"
import { EyeIcon } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
const StartupCard = ({post}: {post: StartupCardType}) => {
  const {_createdAt, view, author:{ _id: authorId,name }, decription, image, category, title , _id} = post;

  return (
    <li className="startup-card group">
        <div className="flex-between">
            <p className="startup_card_date">
                {formarDate(post._createdAt)}
            </p>
            <div className="flex gap-1.5">
              <EyeIcon className="size-6 text-primary"/>
              <span className="text-16-medium">{view}</span>
            </div>
        </div>

        <div className="flex-between mt-5 gap-5">
          <div className="flex-1">
            <Link href={`/user/${post.authorId}`}>
            <p className="text-16-medium line-clamp-1">  
              {name} 
            </p>
            </Link>
            <Link href={`/startup/${_id}`}>
            <h3 className="text-24-semibold line-clamp-1">  
              {title}
            </h3>
            </Link>
          </div>
        <Link href={`/user/${authorId}`}>
    <Image src="https://placehold.co/48x48" alt="placeholder" width={48} height={48} className="rounded-full" />
        </Link>
        </div>

<Link href={`/startup/${_id}`}>
<p className="startup_card_desc">
  {decription}
</p>

<img src={image} alt="placeholder" className="startup_card_img"/>

</Link>

<div className="flex-between gap-3 mt-5">
    <Link href={`/?query=${category.toLowerCase()}`}>
    <p className="text-16-medium">{category}</p>
    </Link>
    <Button   className="startup-card_btn"  asChild>
<Link href={`/startup/${_id}`}>
Details
      </Link>
      </Button>
</div>

    </li>
  )
}

export default StartupCard