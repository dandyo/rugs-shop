function RugsAdd() {

    return <>
        <div className="container-xl">
            <h2>Add new rug</h2>
            <form method="post">
                <div className="form-group mb-3">
                    <label className="form-label">Location</label>
                    <select name="location" className="form-control">
                        <option value="Prescott">Prescott</option>
                        <option value="Scottsdale">Scottsdale</option>
                    </select>
                </div>
                <div className="form-group mb-3">
                    <label className="form-label">Asset Number</label>
                    <input type="text" className="form-control" name="asset_number" required />
                </div>
                <div className="form-group mb-3">
                    <label className="form-label">Design #</label>
                    <input type="text" className="form-control" name="design" required />
                </div>
                <div className="form-group mb-3">
                    <label className="form-label">Shape</label>
                    <select name="location" className="form-control">
                        <option value="All Shapes">All Shapes</option>
                        <option value="Rectangle">Rectangle</option>
                        <option value="Round">Round</option>
                        <option value="Runner">Runner</option>
                    </select>
                </div>
                <div className="form-group mb-3">
                    <label className="form-label">Style</label>
                    <select name="location" className="form-control">
                        <option value="Art Deco Design">Art Deco Design</option>
                        <option value="French And Other European Floral Designs">French And Other European Floral Designs</option>
                    </select>
                </div>

                <label className="form-label">Size</label>
                <div className="row align-items-center">
                    <div className="col-auto mb-3">Inches</div>
                    <div className="col form-group mb-3">
                        <div class="input-group">
                            <span class="input-group-text">width</span>
                            <input type="text" class="form-control" name="size_width_in" />
                        </div>
                    </div>
                    <div className="col form-group mb-3">
                        <div class="input-group">
                            <span class="input-group-text">height</span>
                            <input type="text" class="form-control" name="size_height_in" />
                        </div>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-auto mb-3">Meter</div>
                    <div className="col form-group mb-3">
                        <div class="input-group">
                            <span class="input-group-text">width</span>
                            <input type="text" class="form-control" name="size_width_m" />
                        </div>
                    </div>
                    <div className="col form-group mb-3">
                        <div class="input-group">
                            <span class="input-group-text">height</span>
                            <input type="text" class="form-control" name="size_height_m" />
                        </div>
                    </div>
                </div>
                <div className="form-group mb-3">
                    <label className="form-label">SKU</label>
                    <input type="text" className="form-control" name="sku" />
                </div>
                <div className="form-group mb-3">
                    <label className="form-label">Material</label>
                    <select name="material" className="form-control">
                        <option value="Hair on Hide">Hair on Hide</option>
                        <option value="Non-Dyed">Non-Dyed</option>
                        <option value="Wool Pile">Wool Pile</option>
                        <option value="Wool & Silk">Wool & Silk</option>
                    </select>
                </div>
                <div className="form-group mb-3">
                    <label className="form-label">Collection</label>
                    <select name="collection" className="form-control">
                        <option value="Clean Line">Clean Line</option>
                        <option value="Contemporary">Contemporary</option>
                        <option value="Final-Sale">Final-Sale</option>
                        <option value="Hair on Hide">Hair on Hide</option>
                        <option value="Indigo">Indigo</option>
                        <option value="Marrakesh">Marrakesh </option>
                        <option value="Modern">Modern</option>
                        <option value="Non-Dyed">Non-Dyed</option>
                        <option value="Texture">Texture</option>
                        <option value="Tibetan">Tibetan</option>
                        <option value="Traditional - Transitional">Traditional - Transitional</option>
                        <option value="Vintage">Vintage</option>
                    </select>
                </div>
                <div className="form-group mb-3">
                    <label className="form-label">Primary Color</label>
                    <select name="primary_color" className="form-control">
                        <option value=""></option>
                    </select>
                </div>
                <div className="form-group mb-3">
                    <label className="form-label">Secondary Color</label>
                    <select name="secondary_color" className="form-control">
                        <option value=""></option>
                    </select>
                </div>
                <div className="form-group mb-3">
                    <label className="form-label">Age</label>
                    <select name="age" className="form-control">
                        <option value="Antique Item">Antique Item</option>
                        <option value="New Item">New Item</option>
                        <option value="Vintage">Vintage</option>
                    </select>
                </div>
                <div className="form-group mb-3">
                    <label className="form-label">Construction</label>
                    <input type="text" className="form-control" name="construction" />
                </div>
                <div className="form-group mb-3">
                    <label className="form-label">Country of origin</label>
                    <select name="country" className="form-control">
                        <option value=""></option>
                    </select>
                </div>
                <div className="form-group mb-3">
                    <label className="form-label">Image</label>
                    <input class="form-control" type="file" name="image" />
                </div>
                <input type="submit" value="Save" className="btn btn-primary px-4" />
            </form>
        </div>
    </>
}

export default RugsAdd;