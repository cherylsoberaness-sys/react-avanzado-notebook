import { cookies } from "next/headers";


export default async function UserProfile() {
    const cookieStore = await cookies();
    const displayName = cookieStore.get("demo-user")?.value;

    return <p>{displayName || "no user profile"}</p>
}