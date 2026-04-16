/**
 * Run from server folder: node scripts/seedCategories.js
 * Idempotent: skips categories that already exist (by name).
 */
const dns = require("dns");
try {
	dns.setServers(["8.8.8.8", "1.1.1.1"]);
} catch (_) {}

require("dotenv").config({ path: require("path").join(__dirname, "..", ".env") });
const mongoose = require("mongoose");
const Category = require("../models/Category");

const SEED = [
	{
		name: "Web Development",
		description: "HTML, CSS, JavaScript, React, Node — full-stack web technologies.",
	},
	{
		name: "Data Science",
		description: "Python, statistics, machine learning, and data visualization.",
	},
	{
		name: "Mobile Development",
		description: "Android, iOS, React Native, and cross-platform apps.",
	},
	{
		name: "DevOps & Cloud",
		description: "CI/CD, Docker, Kubernetes, AWS, and infrastructure automation.",
	},
	{
		name: "Programming Fundamentals",
		description: "DSA, OOP, databases, and core computer science concepts.",
	},
];

async function run() {
	const uri = process.env.MONGODB_URL || process.env.MONGODB_URl;
	if (!uri) {
		console.error("Missing MONGODB_URL in server/.env");
		process.exit(1);
	}

	await mongoose.connect(uri, { serverSelectionTimeoutMS: 20000 });

	let added = 0;
	for (const { name, description } of SEED) {
		const existing = await Category.findOne({ name });
		if (existing) {
			// console.log(`Skip (exists): ${name}`);
			continue;
		}
		await Category.create({ name, description });
		// console.log(`Added: ${name}`);
		added++;
	}

	// console.log(`Done. New categories: ${added}`);
	await mongoose.disconnect();
}

run().catch((err) => {
	console.error(err);
	process.exit(1);
});
