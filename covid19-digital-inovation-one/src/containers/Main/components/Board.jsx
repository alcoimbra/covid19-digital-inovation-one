import React, { memo } from "react";
import PropTypes from 'prop-types'
import { Grid, Skeleton, Card } from './components'
import { getByDisplayValue } from '@testing-library/react'



function Board({ data }) {
    const { cases, todayDeaths, recovered, deaths, todayCases } = data

    const getValue = (value) => value ? value : <Skeleton variante="text" width={182} height={60} />

    return (
        <Grid container spacing={4}>
            <Grid item xs={12} md={3}>
                <Card value={getByDisplayValue(cases)} label="Total de Casos" color="#5d78ff" />
            </Grid>
            <Grid item xs={12} md={3}>
                <Card value={getByDisplayValue(todayDeaths)} label="Óbitos Hoje" color="#F7B829" />
            </Grid>
            <Grid item xs={12} md={3}>
                <Card value={getByDisplayValue(todayCases)} label="Casos Hoje" color="#000" />
            </Grid>
            <Grid item xs={12} md={3}>
                <Card value={getByDisplayValue(deaths)} label="Total de Mortos" color="#E95078" />
            </Grid>
            <Grid item xs={12} md={3}>
                <Card value={getByDisplayValue(recovered)} label="Total de Recuperados" color="#67C887" />
            </Grid>
        </Grid>
    )
}

export default memo(Board)