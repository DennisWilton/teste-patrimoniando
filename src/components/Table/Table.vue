<template>
  <div class="teste-patrimoniando__table">
    <table class="teste-patrimoniando__table__table">
      <thead>
        <tr>
          <th v-for="column in columns" :key="column.prop">
            {{ column.label }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in data" :key="row.id">
          <template v-for="{ prop, component } in columns" :key="row.id">
            <td v-if="component">
              <component
                :is="component"
                v-bind="{value: (row as any)[prop], ...row}"
              ></component>
            </td>
            <td v-else>{{ (row as any)[prop] }}</td>
          </template>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style lang="scss" scoped>
.teste-patrimoniando__table {
  display: flex;
  height: 100%;
}
.teste-patrimoniando__table__table {
  display: table;
  width: 100%;
  border-collapse: collapse;
  border-radius: 10px;
  height: 100%;
  overflow: scroll;
  cursor: default;
  user-select: none;

  tr {
    &:nth-child(odd) {
      background-color: #f2f2f2;
    }

    &:hover {
      background: #ddd;
      color: #000;
    }
  }

  td {
    text-align: center;
  }

  thead {
    position: sticky;
    top: 0;
    th {
      color: white;
      background: #222;
    }
  }
}
</style>

<script setup lang="ts">
import { DataColumns } from '.';

defineProps<{
  data: { id: string }[];
  columns: DataColumns<any>[];
}>();
</script>
