import { Component, VNodeProps, AllowedComponentProps } from 'vue';
import Table from './Table.vue';

const idGenerator = (function* () {
  let id = 0;
  while (true) {
    yield (id++).toString();
  }
})();

export interface TableData {
  id: string;
}

export type DataColumns<T extends Object> = {
  label: string;
  prop: keyof T & string;
  component?: Component;
};

export function createColumnConfig<T extends Object>(data: T | T[]) {
  const firstItem = [data].flat()[0];
  const columns: DataColumns<typeof firstItem>[] = [];

  const builder = {
    add,
    build,
  };

  function add(column: {
    prop: keyof typeof firstItem & string;
    label: string;
    component?: Component;
  }) {
    columns.push(column);
    return builder;
  }

  function build() {
    return columns;
  }

  return builder;
}

type WithID<T> = T & { id: string };

export type ComponentProps<C extends Component> = C extends new (
  ...args: any
) => any
  ? Omit<
      InstanceType<C>['$props'],
      keyof VNodeProps | keyof AllowedComponentProps
    >
  : never;

export function createColumnData<T extends Object & { id?: string }>(
  _data: T | T[]
) {
  const data = [_data].flat();

  return data.map((item, index) => ({
    id: 'a',
    ...(data[index] as T),
  })) as WithID<T>[];
}

export default Table;
