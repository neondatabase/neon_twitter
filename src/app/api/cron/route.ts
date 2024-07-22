//  CRON job for deleting posts every 12 hours
import prisma from "@/db";

export async function POST() {
	try {
		await prisma.post.deleteMany();

		return Response.json({ success: true });
	} catch (error) {
		return Response.json({ success: false, error });
	}
}
