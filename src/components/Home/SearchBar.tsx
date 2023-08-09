import { TextField } from '@mui/material'

/// [SearchBar] - SearchBar component for the app
const SearchBar = ({ handleSearch }: { handleSearch: (e: any) => void }) => {
  return (
    <TextField
      id="search"
      label="Search Movies... Example: Justice League"
      variant="outlined"
      onChange={handleSearch}
      fullWidth
      sx={{
        my: 3,
      }}
    />
  )
}

export default SearchBar
