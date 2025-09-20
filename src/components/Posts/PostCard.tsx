import { IPost } from "@/type";


const PostCard = ({ post }: { post: IPost }) => {
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 p-4">
            <h1 className="text-2xl font-bold text-gray-800">{post?.title}</h1>
            <p className="text-sm text-gray-600 mb-1">Brand: <span className="font-medium">{post?.body}</span></p>
        </div>
    );
};

export default PostCard;