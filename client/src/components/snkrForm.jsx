import React from "react";
import Form from "../commons/form";
import Joi from "joi-browser";
import { saveSnkr, getSnkr } from "../services/fakeSnkrService";
import { getBrands } from "../services/fakeBrandService";

class SnkrForm extends Form {
  state = {
    data: { brand: "", name: "", pairsInStock: "", hotRate: "", brandId: "" },
    errors: {},
    brands: []
  };

  schema = {
    _id: Joi.string(),
    brandId: Joi.string()
      .required()
      .label("Brand"),
    brand: Joi.string().required(),
    name: Joi.string().required(),
    pairsInStock: Joi.number().required(),
    hotRate: Joi.number().required()
  };

  componentDidMount() {
    const brands = getBrands();
    this.setState({ brands });

    const snkrId = this.props.match.params.id;
    if (snkrId === "new") return;

    const snkr = getSnkr(snkrId);
    if (!snkr) return this.props.history.replace("/not-found");

    this.setState({ data: this.mapToViewModel(snkr) });

    console.log(this.state);
  }

  mapToViewModel(snkr) {
    return {
      _id: snkr._id,
      brand: snkr.brand.name,
      brandId: snkr.brand._id,
      name: snkr.name,
      pairsInStock: snkr.pairsInStock,
      hotRate: snkr.hotRate
    };
  }

  doSubmit = () => {
    saveSnkr(this.state.data);
    this.props.history.push("/snkrs");
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.renderInput("name", "Name")}
        {this.renderInput("snkrId", "Snkr ID")}
        {this.renderSelect("brand", "Brand", this.state.brands)}

        {this.renderInput("pairsInStock", "Pairs in Stocks")}
        {this.renderInput("hotRate", "Hotness Rating")}

        {this.renderButton("Save")}
      </form>
    );
  }
}

export default SnkrForm;
