import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { generateMeta } from "@/lib/utils";
import AddProductForm from "./add-product-form";
import { Button } from "@/components/ui/button";

export async function generateMetadata() {
  return generateMeta({
    title: "Add Product",
    description:
      "Add new products page. A fast and efficient product addition process using Next.js and Tailwind CSS. User-friendly interface with easily editable form fields.",
    canonical: "/create"
  });
}

export default function Page() {
  return (
    <div className="mx-auto max-w-(--breakpoint-lg)">
      <div className="mb-4">
        <Button asChild variant="outline" size="sm">
          <Link href="/">
            <ChevronLeft /> Back
          </Link>
        </Button>
      </div>
      <div className="space-y-4">
        <AddProductForm />
      </div>
    </div>
  );
}
