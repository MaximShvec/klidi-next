import { promises as fs } from "fs";
import path from "path";
import { generateMeta } from "@/lib/utils";
import Link from "next/link";
import { PlusIcon } from "@radix-ui/react-icons";
import { Metadata } from "next";

import { Button } from "@/components/ui/button";
import { Card, CardAction, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ProductList from "@/app/(app)/_components/product-list";

export async function generateMetadata(): Promise<Metadata> {
  return generateMeta({
    title: "Products",
    description:
      "Product list page created using Tanstack Table. List or filter products. Built with shadcn/ui, Tailwind CSS and Next.js.",
    canonical: "/"
  });
}

async function getMerchants() {
  const data = await fs.readFile(path.join(process.cwd(), "data/merchants.json"));
  return JSON.parse(data.toString());
}

export default async function Page() {
  const merchants = await getMerchants();

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between space-y-2">
        <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
        <Button asChild>
          <Link href="/create">
            <PlusIcon /> Add Product
          </Link>
        </Button>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardDescription>Transactions amount</CardDescription>
            <CardTitle className="font-display text-2xl lg:text-3xl">$100K</CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardDescription>Number of transactions</CardDescription>
            <CardTitle className="font-display text-2xl lg:text-3xl">982</CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardDescription>Commission amount</CardDescription>
            <CardTitle className="font-display text-2xl lg:text-3xl">$1,5K</CardTitle>
          </CardHeader>
        </Card>
      </div>
      <div className="pt-4">
        <h2 className="mb-4 text-2xl font-bold tracking-tight">Merchants</h2>
        <ProductList data={merchants} />
      </div>
    </div>
  );
}
