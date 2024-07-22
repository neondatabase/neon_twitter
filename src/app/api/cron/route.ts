//  CRON job for deleting posts every 12 hours
import prisma from "@/db";

export async function POST() {
	try {
		await prisma.post.deleteMany();

		return new Response("Posts deleted successfully", {
			status: 200,
		});
	} catch (error) {
		return new Response("Error deleting posts", {
			status: 500,
		});
	}
}
