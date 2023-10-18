import Image from 'next/image'
import * as React from 'react'
import IliasIsm from '../public/static/images/Ilias-Ism.jpg'

const TwitterIcon = () => (
  <svg
    stroke="#1DA1F2"
    fill="#1DA1F2"
    strokeWidth="0"
    viewBox="0 0 512 512"
    height="22"
    width="22"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
  </svg>
)

const Avatar = ({ children }: { children: React.ReactNode }) => (
  <div className="h-14 w-14">{children}</div>
)

export const AvatarIliasIsm = () => (
  <Image
    className="m-0 rounded-full"
    src={IliasIsm}
    alt="Avatar for Ilias Ism"
    width={56}
    height={56}
  />
)

export const TweetImage = ({ children }: { children: React.ReactNode }) => (
  <div className="rounded-lg">{children}</div>
)

function Tweet({
  tweetId,
  handle,
  children,
  name,
  avatar,
  date,
}: {
  tweetId: string
  handle: string
  children: string
  name: string
  avatar: React.ReactNode
  date: Date
}) {
  return (
    <a
      href={`https://twitter.com/${handle}/status/${tweetId}`}
      target="_blank"
      rel="noopener noreferrer"
      className="border-secondary text-text relative mb-4  mt-4 block w-full max-w-md rounded-lg border p-6 text-[unset!important] no-underline transition duration-300 ease-in-out hover:border-primary-600"
    >
      <div className="absolute right-4 top-4">
        <TwitterIcon />
      </div>
      <div className="flex">
        <div className="mr-4">
          <Avatar>{avatar}</Avatar>
        </div>
        <div>
          <div className="font-semibold">{name}</div>
          <div className="text-text-muted text-sm text-gray-500">@{handle}</div>
        </div>
      </div>
      <div className="mb-4 mt-4">{children}</div>
      <div className="text-text-muted text-sm">
        - {new Intl.DateTimeFormat(undefined, { dateStyle: 'medium' }).format(date)}
      </div>
    </a>
  )
}

export default Tweet
