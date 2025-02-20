<script setup>
import {
  VerticalNavLink,
  VerticalNavSectionTitle,
} from '@layouts'
</script>

<template>
    <ul>
        <VerticalNavSectionTitle :item="{ heading: 'Monolith' }" />
        <VerticalNavLink
            :item="{
                title: 'Order',
                to: '/monoliths/orders',
            }"
        />
        <VerticalNavSectionTitle :item="{ heading: 'Inventory' }" />
    </ul>
</template>
