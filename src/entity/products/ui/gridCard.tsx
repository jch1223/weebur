import Image from 'next/image';
import { CaptionsIcon, StarIcon } from 'lucide-react';
import { Product } from '@/entity/products/api/productsApi';
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from '@/shared/ui/card';

type GridCardProps = Omit<Product, 'id'>;

export const GridCard = ({
  title,
  description,
  thumbnail,
  rating,
  reviews,
}: GridCardProps) => {
  return (
    <Card>
      <CardContent className="flex flex-col items-center gap-6">
        <Image src={thumbnail} alt={title} width={150} height={150} />

        <div className="flex flex-col justify-between gap-2">
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <StarIcon className="h-4 w-4 text-yellow-500" />
              <span className="text-sm text-gray-500">{rating}</span>
            </div>
            <div className="flex items-center gap-1">
              <CaptionsIcon className="h-4 w-4" />
              <span className="text-sm text-gray-500">{reviews.length}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
