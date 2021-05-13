import React from 'react'
import { Typography } from 'components/Typography'
import { Grid, Row } from 'components/Grid'

const TypoSystemExample = (): JSX.Element => {
  return (
    <section>
      <Typography variant="title1">Typography</Typography>
      <Typography variant="title2" bordered>
        Elements
      </Typography>

      <Typography variant="largetitle">Its a LargeTitle Variant!</Typography>
      <Typography variant="title1">Title1 Variant</Typography>
      <Typography variant="title2">Title2 Variant</Typography>
      <Typography variant="title3">Title3 Variant</Typography>
      <Typography variant="headline"> headline examples </Typography>
      <Typography variant="subhead"> subhead examples </Typography>
      <Typography variant="callout"> callout examples </Typography>
      <Typography variant="body"> body examples </Typography>
      <Typography variant="body2"> body2 examples </Typography>
      <Typography variant="footnote"> footnote examples </Typography>
      <Grid>
        <Row>
          <Typography variant="button"> button label example </Typography>
        </Row>
      </Grid>
      <Grid>
        <Row>
          <Typography variant="label"> label examples </Typography>
        </Row>
      </Grid>
    </section>
  )
}

export { TypoSystemExample }
