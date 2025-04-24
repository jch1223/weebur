import { GridTypeList } from '@/features/productsList/ui/girdTypeList';
import { ListTypeList } from '@/features/productsList/ui/listTypeList';

interface CatalogProps {
  type: 'list' | 'grid';
}

export const Catalog = ({ type }: CatalogProps) => {
  switch (type) {
    case 'list':
      return <ListTypeList />;
    case 'grid':
      return <GridTypeList />;
    default:
      return null;
  }
};
