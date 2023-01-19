import { Container, Box, Grid,  Button, Paper } from '@mui/material'
import '../Services.css'

const Services = () => {

    return (
        <Grid container spacing={4}>
            <Grid item xl={3} lg={4} >
                <Box className='Service' sx={{height: 140, width: 350}}>
                    <h1>Property Appraisal</h1>
                    <p>We conduct a thorough appraisal of your property that you want to put up for rent based on the current rent market at that moment.</p>
                    <h2>READ MORE</h2>
                    <button>ARRANGE AN APPRAISAL</button>
                </Box>
            </Grid>
            <Grid item xl={3} lg={4} >
                <Box className='Service' sx={{height: 140, width: 350}}>
                    <h1>Our Property Listings</h1>
                    <p>If you are a landlord, this will give you a good indication of the quality of properties that we are currently under management with. </p>
                    <h2>READ MORE</h2>
                    <button>SEE LISTINGS</button>
                </Box>
            </Grid>
            
            <Grid item xl={3} lg={4} >
                <Box className='Service' sx={{height: 140, width: 350}}>
                    <h1>Tailored Services</h1>
                    <p>As point of difference we offer specialized tailored services. Selling a tenanted property can be a frustrating time for vendors.</p>
                    <h2>READ MORE</h2>
                    <button>CONTACT US</button>
                </Box>
            </Grid>
            <Grid item xl={3} lg={4} >
                <Box className='Service' sx={{height: 140, width: 350}}>
                    <h1>Change To Metro</h1>
                    <p>Changing to Metro NZ Property Management is easy. We collect the required information from you and in return.</p>
                    <h2>READ MORE</h2>
                    <button>MAKE A CHANGE</button>
                </Box>
            </Grid>
        </Grid>
    )

}

export default Services