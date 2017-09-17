import React from 'react';
import FormInput from '../common/form-input';
import Button from '../common/button';
import NumberList from '../common/list-component';

export default class Submitly extends React.Component{
    constructor(){
        super();
        this.state = {
            firstName: '',
            lastName: '',
            favLanguage: '',
            fullText: 'Fill in all fields'
        };
        //this.functionname=this.functionname.bind(this)
        this.onFirstNameChange= this.onFirstNameChange.bind(this);
        this.onLastNameChange= this.onLastNameChange.bind(this);
        this.onFavLanguageChange= this.onFavLanguageChange.bind(this);
        this.onSubmit= this.onSubmit.bind(this);

    }

    //functionanem(event) {
    // this.setState({'firstName': event.target.value})

    onFirstNameChange(event){
        this.setState({'firstName': event.target.value})
    }

    onLastNameChange(event){
        this.setState({'lastName': event.target.value})
    }

    onFavLanguageChange(event){
        this.setState({'favLanguage': event.target.value})
    }

    onSubmit(){
        let all_text =  this.state.firstName + ' ' +
                        this.state.lastName +
                        ' speaks in ' +
                        this.state.favLanguage;
        this.setState({'fullText': all_text})
    }

    render (){
        return(
            <div>
                <NumberList
                    myList = {[1,2,3,4,5]}
                    idList = {[0,1,2,3,4,5]}
                    orderedList = {false}
                />
                <FormInput
                    label = 'First Name: '
                    onChange = {this.onFirstNameChange}
                />
                <FormInput
                    label = 'Last Name: '
                    onChange = {this.onLastNameChange}
                />
                <FormInput
                    label = 'Favorite Language: '
                    onChange = {this.onFavLanguageChange}
                        />
                <Button
                    text = 'Submit'
                    onClick = {this.onSubmit}
                />
                {this.state.fullText}
            </div>
        )
    }
}