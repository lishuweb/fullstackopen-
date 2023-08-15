import Person from "./Person";

const FilterPerson = ({person, filters}) => (
    <div>
    {person.filter(value => value.name.toLowerCase().includes(filters))
        .map(({name,number}) =>
        <Person name = {name} number = {number} />
        )}
        </div>
)
export default FilterPerson;