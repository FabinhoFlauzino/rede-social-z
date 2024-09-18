import { Tweet } from "@/types/tweet";
import { user } from "./user";

export const tweet: Tweet = {
  id: 123,
  user: user,
  body: 'Outro dia mágico',
  image: 'https://img.freepik.com/fotos-gratis/vista-lateral-do-homem-usando-smartphone_23-2148793481.jpg?t=st=1726620256~exp=1726623856~hmac=26485e978345913465af7de4a5d4b9eeb533f0cfe06da3af2dd54e0a269853cf&w=996',
  likeCount: 500,
  commentCount: 61,
  retweetCount: 0,
  liked: true,
  retweeted: false,
  dataPost: new Date(2024, 8, 1, 10, 0, 0)
}