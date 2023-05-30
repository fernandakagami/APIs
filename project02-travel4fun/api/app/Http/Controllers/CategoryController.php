<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Category;

class CategoryController extends Controller
{
    public function index(Request $request)
    {        
        return Category::all();
    }

    public function store(Request $request)
    {
        $category = new Category;
        $category->name = $request->input('name');
        $category->save();

        return 'Category created.';
    }

    public function show(int $id, Request $request)
    {        
        $category = Category::findOrFail($id);
        
        return $category;
    }

    public function update(Request $request, int $id)
    {
        $category = Category::findOrFail($id);

        $category->fill($request->all());
        $category->save();

        return "Category updated";
    }

    public function destroy(int $id)
    {
        Category::destroy($id);
        return 'Category removed';
    }
}
